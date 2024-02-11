let modelInfo = {
    modelName: '',
    modelFamilyName: '',
    maxRange: '',
    spinSpeed: '',
    frequency: '',
  };
  
  function getModel() {
    return modelInfo;
  }
  
  function updateModel(updatedModelInfo) {
    modelInfo = { ...updatedModelInfo };
  }
  
export { getModel, updateModel };