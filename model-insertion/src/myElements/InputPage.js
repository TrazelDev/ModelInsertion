import React, { Component } from 'react';
import './InputPage.css';
import InputTaker from './InputTaker';
import { getModel, updateModel } from './inputPageManager';
import './mainStyles.css';

class InputPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localModelInfo: getModel(),
    };
  }

  handleInputChange = (field, value) => {
    this.setState((prevState) => ({
      localModelInfo: {
        ...prevState.localModelInfo,
        [field]: value,
      },
    }));

    updateModel({
      ...this.state.localModelInfo,
      [field]: value,
    });
  }

  render() {
    const { localModelInfo } = this.state;
    
    return (
      <div className="InputPage">
        <div className="input-container">
          <InputTaker
            inputText="enter model name:"
            inputType="Text"
            inputValue={localModelInfo.modelName}
            inputValueFunction={(value) => this.handleInputChange('modelName', value)}
          />
          <InputTaker
            inputText="enter family model name:"
            inputType="Text"
            inputValue={localModelInfo.modelFamilyName}
            inputValueFunction={(value) => this.handleInputChange('modelFamilyName', value)}
          />
          <InputTaker
            inputText="enter max range(radar):"
            inputType="number"
            inputValue={localModelInfo.maxRange}
            inputValueFunction={(value) => this.handleInputChange('maxRange', value)}
          />
          <InputTaker
            inputText="enter spin speed(radar):"
            inputType="number"
            inputValue={localModelInfo.spinSpeed}
            inputValueFunction={(value) => this.handleInputChange('spinSpeed', value)}
          />
          <InputTaker
            inputText="enter frequency:"
            inputType="number"
            inputValue={localModelInfo.frequency}
            inputValueFunction={(value) => this.handleInputChange('frequency', value)}
          />
        </div>
      </div>
    );
  }
}

export default InputPage;
