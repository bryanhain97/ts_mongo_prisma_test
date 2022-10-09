type RemainingChars = {
    title: number,
    text: number,
    titleRequiredLength: RequiredLength['title'],
    textRequiredLength: RequiredLength['text'],
};

type RequiredLength = {
    title: Boolean
    text: Boolean,
}


export {
    type RemainingChars,
    type RequiredLength
};