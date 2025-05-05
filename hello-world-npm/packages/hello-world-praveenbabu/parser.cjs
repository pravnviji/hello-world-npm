const fs = require('fs');
const { parseString } = require('xml2js');

// Wrap the code inside an async function
async function convertXmlToJson() {
  try {
    const xml = await fs.promises.readFile('sample.xml', 'utf-8');
    
    parseString(xml, { attrkey: "attributes" }, async (err, result) => {
      if (err) {
        console.error(err);
        return;
      }

      // Convert the result to a pretty JSON string
      const jsonString = JSON.stringify(result, null, 2);
      
      // Save the JSON string to a new file
      await fs.promises.writeFile('output.json', jsonString, 'utf-8');
      console.log('JSON saved to output.json');
    });
  } catch (error) {
    console.error('Error reading XML file:', error);
  }
}

// Call the async function
convertXmlToJson();
