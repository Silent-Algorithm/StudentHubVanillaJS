export function saveStudent(id, fullName, matricule, email, dateOfBirth, gender, phoneNumber, school, department, photoUrl) {
            const newStudent = {
                id,
                fullName,
                matricule,
                email,
                dateOfBirth,
                phoneNumber,
                gender,
                school,
                department,
                photoUrl,
                registrationDate: new Date().toISOString()
            };

             students.push(newStudent);
        const students = localStorage.setItem('students', JSON.stringify(students));

            // Reset form
            studentForm.reset();

            // Update UI
            renderStudents();
            renderStudentGallery();
            updateStats();
            

            // Show success message
            alert('Student registered successfully!');
            window.location.reload()
            window.location.href = 'home.html'
        }