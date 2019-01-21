export default function UploadFile (file, setState) {

  let data = [];

  fetch(file)
  .then(response => response.text())
  .then( (text) => {

    var textFile = text.trim().split("\n");


    let columns = textFile[0];
    
    columns = columns.split(',');

    const valueColumns = textFile.slice(1, textFile.length)

    valueColumns.forEach((item, i) => {

      var values = item.split(',');
      let object = {}
      values.forEach((value, j) => {

        object[columns[j].trim()] = value;

      });
      data.push(object);

    })

    if (setState !== undefined){
      setState(data);
    }
  })
  .catch(error => console.log('error upload file', error));
  
  
}