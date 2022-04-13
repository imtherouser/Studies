import CreateOrCheckDefaultData from '../../storage/services/CreateOrCheckDefaultData.js';

const CreateCustomSiteFive = async (
  newDisplay,
  newWhereToOpen,
  newIcon,
  newTitle,
  newProtocol,
  newAddress,
) => {
  await browser.storage.sync.get().then(async (data) => {
    if (!data.owlTools) {
      await CreateOrCheckDefaultData();
    } else {
      let newData = {
        owlTools: {
          ...data.owlTools,
          customSites: {
            ...data.owlTools.customSites,
            customSiteFive: {
              display: newDisplay,
              whereToOpen: newWhereToOpen,
              icon: newIcon,
              title: newTitle,
              protocol: newProtocol,
              address: newAddress,
            },
          },
        },
      };
      await browser.storage.sync.set(newData);
    }
  });
};

export default CreateCustomSiteFive;
