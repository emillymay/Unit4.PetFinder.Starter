window.onload = async function() {
    try {
        const response = await fetch('/api/v1/pets');
        if (!response.ok) {
            throw new Error('Failed to fetch pets');
        }
        const petsData = await response.json();
        const petList = document.getElementById('pet-list');
        petsData.forEach(pet => {
            const listItem = document.createElement('li');
            listItem.textContent = pet.name;
            petList.appendChild(listItem);
        });
    } catch (error) {
        console.error(error);
    }
};