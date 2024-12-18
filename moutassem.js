document.addEventListener('DOMContentLoaded', function() {
    const cvContainer = document.querySelector('.cv-container');
  
    const employees = [
      {
        name: 'moutassem khaled',
        role: 'Data Analyst',
        image: 'https://placekitten.com/300/200',
        skills: ['SQL', 'Excel', 'Python', 'Data Visualization'],
        experience: '3 years of experience in data analysis and reporting.',
        contact: 'mo@example.com',
      
      
      },
    ];
  
    employees.forEach(employee => {
       const card = document.createElement('div');
          card.classList.add('cv-card');
           // Image element
          const imageElement = document.createElement('img');
          imageElement.src = employee.image;
          imageElement.alt = employee.name;
          card.appendChild(imageElement);
  
          const detailsDiv = document.createElement('div');
          detailsDiv.classList.add('details');
  
  
         // Heading
          const heading = document.createElement('h2');
          heading.textContent = employee.name;
          detailsDiv.appendChild(heading);
  
           // Paragraph for role
          const roleParagraph = document.createElement('p');
          roleParagraph.textContent = employee.role;
          detailsDiv.appendChild(roleParagraph);
  
        //Skills
         const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('skills');
  
        const skillsHeader = document.createElement('h3');
        skillsHeader.textContent = "Skills";
        skillsDiv.appendChild(skillsHeader);
  
  
          const skillsList = document.createElement('ul');
        employee.skills.forEach(skill => {
             const skillItem = document.createElement('li');
            skillItem.textContent = skill;
             skillsList.appendChild(skillItem);
          });
        skillsDiv.appendChild(skillsList)
  
          detailsDiv.appendChild(skillsDiv);
  
        //experience
          const experienceDiv = document.createElement('div');
        experienceDiv.classList.add('experience');
          const experienceHeader = document.createElement('h3');
          experienceHeader.textContent = "Experience";
         experienceDiv.appendChild(experienceHeader)
          const experienceParagraph = document.createElement('p');
          experienceParagraph.textContent = employee.experience;
         experienceDiv.appendChild(experienceParagraph);
  
        detailsDiv.appendChild(experienceDiv)
  
  
        //contact
          const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact');
          const contactHeader = document.createElement('h3');
         contactHeader.textContent = "Contact";
         contactDiv.appendChild(contactHeader)
          const contactParagraph = document.createElement('p');
          contactParagraph.textContent = employee.contact;
         contactDiv.appendChild(contactParagraph);
  
          detailsDiv.appendChild(contactDiv);
  
        card.appendChild(detailsDiv);
  
  
        card.addEventListener('click', () => {
             card.classList.toggle('expanded');
          });
  
      cvContainer.appendChild(card);
  
    });
  });