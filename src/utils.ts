export function isValidString(str:string):boolean {
    // Regex: ^[A-Za-z]+$ ensures the string contains only letters (uppercase and lowercase)
    const regex = /^[A-Za-z]+$/;
    return regex.test(str) && str.length>1;
  }
