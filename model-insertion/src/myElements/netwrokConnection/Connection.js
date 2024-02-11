import React, { Component } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { modelInsertMsg } from './transfer_pb';
import * as signalR from '@microsoft/signalr'; // Import signalR
import * as msgpack from '@microsoft/signalr-protocol-msgpack'; // Import msgpack
import "./Connection.css"
import { getModel, updateModel } from '../inputPageManager'; // Import the functions
import DisplayPage from '../DisplayPage';
import '../mainStyles.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const GradientButton = styled(Button)`
  background-image: linear-gradient(to bottom, red, orange);
  border: 2px solid orange;
  color: white;
  font-weight: bold;
  padding: 12px 32px; /* Increase padding for bigger size */
  font-size: 1.2rem; /* Increase font size for bigger text */

  &:hover {
    background-image: linear-gradient(to bottom, orange, yellow);
  }
`;

class Connection extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      message: '',
      messages: [],
      hubConnection: null,
      modelList: []
    };
  }

  /**
   * this function is being called automatically after there is an update in the props that constructor is getting, 
   * and then checks if the page was switched to the display page and all of the models should be pulled again
   * @param {
   * } prevProps 
   */
  componentDidUpdate(prevProps) 
  {
    if (this.props.currPageIndex !== prevProps.currPageIndex && this.props.currPageIndex === false) 
    {
      this.getModels();
    }
  }

  /**
   * function that is called automatically and is mostly for using callback functions that are going to be used
   * when the server send data to the client
   */
  componentDidMount = () => 
  {
    // for avoiding double calling for this function:
    if (this.state.hubConnection && !this.state.eventRegistered) 
    {
      return;
    }

    // creating the hub that is going to be used for communicating with the server
    const hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:5162/model')
      .withHubProtocol(new msgpack.MessagePackHubProtocol()) 
      .build();

    // setting the function that are being called when the server is sending data back to te client
    this.setState({ hubConnection }, () => {
      this.state.hubConnection
        .start()
        .then(() => console.log('Connection started!'))
        .catch(err => console.log('Error while establishing connection :('));

        this.state.hubConnection.on('getAllModels', this.getAllModels);

        this.state.hubConnection.on('updateModel', this.modelsUpdate);
    });
  };
  
  /**
   * this is callback function of signalR that is being called when the server returns a msg with the signature getAllModels
   * @param {*} messageData 
   */
  getAllModels = (messageData) =>
  {
    let index = 0;
    let modelSize = 0; 
    const newModels = [];
    
    console.log("getAllModels function has been called the length of the msg from the server is:" + messageData.length);
    
    // going through the msg and extracting all of the modes the msg structure is: 1 byte of the model size, than the model, 1 byte of model size... 
    while(index <= messageData.length)
    {
      modelSize = messageData[index];

      const slicedArray = messageData.slice(index + 1, modelSize + index + 1);
      const decodedMessages = modelInsertMsg.deserializeBinary(slicedArray);
      
      // so empty models won't get in the list
      if(decodedMessages.getModelname() === "")
      {
        break;
      }
      
      const thisList = [decodedMessages.getModelname(), decodedMessages.getModelfamilyname(), 
        decodedMessages.getMaxrange(), decodedMessages.getSpinspeed(), decodedMessages.getFrequency()]

      newModels.push(thisList);
      index += modelSize + 1;
    }
    
    
    this.setState({ modelList: newModels }, () => 
    {
      console.log("the new list of models looks like this:" + this.state.modelList);
    });
  }

  /**
   * this is callback function of signalR that is being called when the server returns a msg with the signature updateModel
   * @param {*} messageData 
   */
  modelsUpdate = (messageData) =>
  {
    // turning off the callback function in order to avoid double calling the function
    this.state.hubConnection.off('updateModel', this.modelsUpdate);
    
    const decodedMessage = modelInsertMsg.deserializeBinary(messageData);
    const newItem = [decodedMessage.getModelname(), decodedMessage.getModelfamilyname(), 
      decodedMessage.getMaxrange(), decodedMessage.getSpinspeed(), decodedMessage.getFrequency()]

    this.setState((prevState) => ({modelList : [...prevState.modelList, newItem], }))

    // turning on the function in 10 milliseconds so it will be able to receive future information from the server 
    setTimeout(() => { this.state.hubConnection.on('updateModel', this.modelsUpdate); } , 100);
  }
  
  serializeModelInfo()
  {
    const modelInfo = getModel();
    console.log(modelInfo.modelName);

    // Create a new instance of the message
    const request = new modelInsertMsg();
    
    if(modelInfo.modelName === "" ||
    modelInfo.modelFamilyName === "" ||
    modelInfo.maxRange == 0 ||
    modelInfo.spinSpeed == 0 ||
    modelInfo.frequency == 0
    )
    {
      console.log("failed");
      return null;
    }

    request.setModelname(modelInfo.modelName);
    request.setModelfamilyname(modelInfo.modelFamilyName);
    request.setMaxrange(modelInfo.maxRange);
    request.setSpinspeed(modelInfo.spinSpeed);
    request.setFrequency(modelInfo.frequency);

    return request.serializeBinary();
  }

  sendModel = () => 
  {
    let serialized = this.serializeModelInfo();
    
    if(serialized === null)
    {
      alert("one or more of the fields is not filled in");
      return;
    }

    console.log(serialized);
    this.state.hubConnection
      .invoke('sendModels', serialized) 
      .catch(err => console.error(err));
      this.setState({message: ''});
  };

  getModels = () =>
  {
    this.state.hubConnection
      .invoke('receiveModels') 
      .catch(err => console.error(err));
      this.setState({message: ''});
  }

  deleteAllModels = () => 
  {
    this.state.hubConnection
      .invoke('deleteModels') 
      .catch(err => console.error(err));
      this.setState({message: ''});
  }


  render() 
  {
    console.log(this.state.modelList);
    return (
      <div>
        
        <div>
          {this.state.messages.map((message, index) => (
            <span style={{display: 'block'}} key={index}> {message} </span>
          ))}
        </div>
        
        {this.props.currPageIndex ? 
          <GradientButton
            onClick={this.sendModel}>Send</GradientButton>

        :
          <DisplayPage className = "con" list = {this.state.modelList} />
        }

      </div>

    );
  }
}

// <button className = "deleteModels" onClick={this.deleteAllModels}>delete models</button>

export default Connection;