let generateUrl = (model, size, shoeProvider = 'adidas') => {
  let url;
  if (shoeProvider === 'adidas') {
    let baseSize = 580;
    let shoeSize = size - 6.5;
    shoeSize = shoeSize * 20;
    sizeCode = shoeSize + baseSize;
    url = `http://adidas.com/us/${model}.html?forceSelSize=${model}_${sizeCode}`;
    return url;
  }
};

module.exports = generateUrl;
