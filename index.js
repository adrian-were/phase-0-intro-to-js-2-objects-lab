const { highlightTags } = require("mocha/lib/utils");

// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress : "11 Broadway"
}

function updateEmployeeWithKeyAndValue(Object,key,value){
    return{
    ...Object,
    [key]:value,
    }
}
const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "35 lane"
)

function destructivelyUpdateEmployeeWithKeyAndValue(Object,key,value){
    Object[key] = value
    return Object
}
   const Overemployees = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
     "streetAddress",
     "12 Broadway")


function deleteFromEmployeeByKey(Object,key) {

}