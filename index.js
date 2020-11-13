const {sum, stringCalc} = require('./src/sum')
const maxSum = process.argv[2]
console.log('sum', maxSum)

for(let i=1; i < process.argv.length; i++)
{
    console.log("ARGUMENT: "+process.argv[i])
        // stringCalc(i))
}