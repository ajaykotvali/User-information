fetch('data.json')
.then(response=>response.json())
.then(data=>{
    const profileDive = document.getElementById('profile');
    profileDive.innerHTML = `<p><strong>Name:</strong>${data.name}</p><p><strong>Email:</strong>${data.email}</p><p><strong>Age</strong>${data.age}</p>`;

})
.catch(error => {
    console.error('Error loading JSON:',error);
});
