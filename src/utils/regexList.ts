const regexList = {
    email: /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()^<>+_#"=':;,./-])[A-Za-z\d@$!%*?&()^<>+_#"=':;,./-]{4,20}$/,
     // FOR PASSWORD
     minMaxLength: /^.{4,20}$/,
     noWhitespace: /^\S+$/,
     containLowercase: /^[^a-z]*[a-z].*$/,
     containUppercase: /^[^A-Z]*[A-Z].*$/,
     containNumeric: /^[^\d]*\d.*$/,
     containSpecialCharacter: /^[^!@#$%^&*()_+{}\[\]:;<>,.?~\\-]*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-].*$/,
     
}

export default regexList