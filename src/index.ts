  const button = document.getElementById("prepend") as HTMLButtonElement;
  const input1 = document.getElementById("numSpaces") as HTMLInputElement;
  const input2 = document.getElementById("stringToPrepend") as HTMLInputElement;

    button!.addEventListener("click", function () {
    console.log(prepend(input1!.value, input2!.value));
    });

function prepend(numSpaces: number | string, stringToPrepend: string):string {
  let newString:string = "";
  for(let i = 0; i<+numSpaces;i++)
  {
    newString+=" ";
  }
  return newString.concat(stringToPrepend);
}