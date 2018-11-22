// Script Requires
var fs = require('fs');

var remainingFolders = [];
var galleryList = "";

// Google Requires
const GoogleAuth = require('google-auth-library');
const OAuth2Client = GoogleAuth.OAuth2Client;
const {google} = require('googleapis');

const clientId = '759551945840-ku56r8rn1d839csab6o2phjd9ii879ks.apps.googleusercontent.com';
const clientSecret = 'aTXNdmOBJvcyP-mVDsWBhqDn';
const redirectUri = 'http://localhost';

const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri)
// your oauth method, see documentation


const drive = google.drive({ version: 'v3', auth: oauth2Client })
/**
From now on, if you want to get the list of children, you must use a query string, in the form of
"'IDofYourFolder in' parents" where "in parents" indicates that Drive should look into IDofYouFolder
**/

// var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
oauth2Client.credentials = {
  refresh_token: '1/BaIVlBcYYj5RVKGG4rDmSG1dXgHIiiWeoFoRZhbNTns'
};

oauth2Client.refreshAccessToken(function(err, tokens){
  console.log(tokens)
  oauth2Client.credentials = {access_token : tokens.access_token}

  // Get the image folders
  var fileId = '1eMEnnUG2AzabUpyewhr32ueLpJxku-Cy'
  listFiles(fileId, function (err, response) {
    // TODO handle response
    if(err) return err;

    // Loop through each gallery folder
    var galleryFolders = response.data.files;
    
    console.log(galleryFolders);
    galleryList = {};
    for(var a = 0; a < galleryFolders.length; a++){
      var folder = galleryFolders[a];
      galleryList[folder.id] = `- name: ${folder.name}\n`;
      remainingFolders.push(folder.id);
      console.log("GOING INTO PARSE FOLDER");
      parseFolder(folder);
    }
  });
});

function listFiles(fileId, callback){
  drive.files.list({
    includeRemoved: false,
    spaces: 'drive',
    fileId: fileId,
    fields: 'nextPageToken, files(id, name, parents, mimeType, modifiedTime)',
    q: `'${fileId}' in parents`
  }, callback);
}

function writeGallery(galleryList){
  console.log(galleryList);
  var text = "";
  var keys = Object.keys(galleryList);
  for(var a = 0; a < keys.length; a++){
    text += galleryList[keys[a]].index;
  }
  console.log(text);
  fs.writeFile("../../../_data/gallery.yml", text, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
  });
}
function writeGalleryHTML(name, text){
  var keys = Object.keys(galleryList);
  for(var a = 0; a < keys.length; a++){
    fs.mkdir(`../../../community/gallery/${galleryList[keys[a]].name}/`, { recursive: true }, function(gallery, err){
      gallery.html = `---\nlayout: gallery\npermalink: /community/gallery/${gallery.name}/\ntitle: Gallery\npublished: true\n---\n` + gallery.html;
      fs.writeFile(`../../../community/gallery/${gallery.name}/index.md`, gallery.html, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
      });
    }.bind(null, galleryList[keys[a]]));
  }
}

function parseFolder(folder){
    listFiles(folder.id, function(err, response){
      console.log(`THE FOLDER ID: ${folder.id}`);
      console.log(folder);
      console.log(err);
      // console.log(response.data.files);

      var images = response.data.files;
      if(images.length > 0){
        galleryList[folder.id] = {};
        galleryList[folder.id].name = folder.name;
        galleryList[folder.id].index = `- name: ${folder.name}\n`;
        galleryList[folder.id].index += "  images:\n";
        galleryList[folder.id].html = `<h1>${folder.name}</h1>\n<div class="gallery cf">\n`;
        for(var a = 0; a < images.length; a++){
          galleryList[folder.id].index += `  - https://drive.google.com/uc?export=view&id=${images[a].id}\n`;
          galleryList[folder.id].html += `  <div class="gallery-image">\n    <div class="wrapper">\n      <img src="https://drive.google.com/uc?export=view&id=${images[a].id}" />\n    </div>\n  </div>`;
        }

        galleryList[folder.id].html += `\n</div>`;
        console.log(galleryList);
        // console.log(remainingFolders);
      }


      // Remove the folder from the remaining folder array
      var remainingIndex = remainingFolders.indexOf(folder.id);
      if(remainingIndex != -1)
        remainingFolders.splice(remainingIndex, 1);

      console.log("THE REMAINING FOLDERS:");
      console.log(remainingFolders);
      if(remainingFolders.length === 0){
        writeGallery(galleryList);
        writeGalleryHTML(galleryList);
      }
    });
}