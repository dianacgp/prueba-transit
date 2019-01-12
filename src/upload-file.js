export default function UploadFile (file, setState) {

  let data = [];

  fetch(file)
  .then(response => response.text())
  .then( (text) => {

    var textFile = text.split("\n");

    let attributes = textFile.slice(0, 1);
    attributes = attributes[0].split(',');
    const valuesAttributes = textFile.slice(1, textFile.length)

    valuesAttributes .forEach((item, i) => {
     
      var values = item.split(',');
      let object = {}
      values.forEach((value, j) => {

        object[attributes[j]] = value;

      })
      data.push(object);

    })
    setState(data);
  })
  .catch(error => console.log('error', error));
  
  
}