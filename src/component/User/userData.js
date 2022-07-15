const userData=(id,email,serverTimestamp) =>  {
return{
id:id,
createdAt:serverTimestamp(),
name: "",
email: email,
dob: "",
fName: "",
mName: "",
status:"",
gender: "",
marital: "",
contactNumber: "",
profileImg: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
fbLink: "",
cvLink:"",
presentAddress: {
  district: "",
  upzilla: "",
  area: ""
},
permanentAddress: {
  district: "",
  upzilla: "",
  postOffice: "",
  postCode: "",
  area: ""
},
presentCompany: {
  name: "",
  designation:"",
  location: "",
  from: "",
  to: ""
},
previousJob: [],
responsibity:[],
ssc: {
  name: "",
  season: "",
  passingYear: "",
  group: "",
  result: ""
},
collage: {
  name: "",
  season: "",
  passingYear: "",
  group: "",
  result: ""
},
bsc: {
  name: "",
  season: "",
  passingYear: "",
  group: "",
  result: ""
},
msc: {
  name: "",
  season: "",
  passingYear: "",
  group: "",
  result: ""
}
}
}
export default userData;