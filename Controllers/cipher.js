const async = require("async");

let getNewLetter = (letter, newKey, alphabets) => {
    const newLetterCode = alphabets.indexOf(letter) + newKey;
	return alphabets[(newLetterCode <= 25) ? newLetterCode : (-1 + (newLetterCode % 25))]
}
exports.getCipherText = (req, res) => {
    let string= req.body.string;
    let key= req.body.key;
    return async.autoInject(
        {
            
            cipherText: function (callback) {
                const newArr = [];
                const newKey = key % 26;
                const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
                for (let letter of string) {
                    newArr.push(getNewLetter(letter, newKey, alphabets));
                }
                return callback(null, newArr.join(''));
            },
        },
        function (err, response) {
            if (err) {
                 return res.send(res, err);
            }

            let resp = {
                status: 200,
                data: response.cipherText,
            };

            return res.send(resp);
        }
    );
}
