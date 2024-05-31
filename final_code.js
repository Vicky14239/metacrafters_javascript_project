/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
// Create a variable to hold your NFT's
const NFTStore = [];

// Function to generate a unique NFT ID
function generateNFTID() {
  return `NFT-${Math.floor(Math.random() * 100000)}`;
}

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(_name, _creator, _yearCreated, _description) {
  const nft = {
    id: generateNFTID(),
    name: _name,
    creator: _creator,
    yearCreated: _yearCreated,
    description: _description,
  };
  NFTStore.push(nft);
  console.log(_name + " Minted | ID -> " + nft.id);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  console.log("\nListing all minted NFTs:\n");

  NFTStore.forEach((nft) => {
    console.log(`NFT ID: ${nft.id}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Creator: ${nft.creator}`);
    console.log(`Year Created: ${nft.yearCreated}`);
    console.log(`Description: ${nft.description}`);
    console.log("\n");
  });

  console.log("These are all the minted NFTs so far!\n");
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total number of supplied NFTs are " + NFTStore.length);
}

// Call your functions below this line
mintNFT(
  "The End",
  "Soumya",
  2003,
  "A expression showing how a begin must have end"
);
mintNFT(
  "Burning Night",
  "Rick Hustler",
  2021,
  "The truth of life crucial for the Hustelers"
);
mintNFT(
  "The Scream",
  "Jhon Snow",
  2024,
  "An iconic piece representing existential angst."
);
listNFTs();
getTotalSupply();
