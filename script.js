//Mixex Messaging Program

const memory_verse= [ 
    {
      verse : 'John 3:16',
      message: 'For God so loved the world,that he gave his only son..'
    },
    {
        verse: 'Matth 7:7',
        message:'Ask and it shall be given onto you,seek and you shall find..'
    },
    {
        verse: 'John 10:30',
        message: 'And Jesuse wept'
    },
    {
        verse: 'Psalm 23:1',
        message: 'The Lord is my shepherd, i shall not want..'
    },
    {
        verse: 'John 10:40',
        message: "Didn't i tell you if you believe, you will see the glory of God?"
    }


];

const YourMemoryVerse= bible =>{
    let verse_selector= bible[Math.floor(Math.random() * bible.length)];
    let verse= verse_selector.verse
    let text=verse_selector.message

    return `Your Memory verse is: ${verse}  ${text}`;
};

console.log(YourMemoryVerse(memory_verse));
