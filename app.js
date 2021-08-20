/*
DOM selection
Event listenner
Basic validation
Create element
Append
*/

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function(e){
    e.preventDefault();
    
    if(title.value == '' || author.value == '' || year.value == '')
    {
        alert("Fill the input field.")
    }
    else
    {
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        const icon = document.createElement('img');
        icon.setAttribute('src', 'delete.png');
        icon.style.marginTop="10px";
        newRow.appendChild(icon);

        bookList.appendChild(newRow)

        title.value='';
        author.value='';
        year.value='';

        icon.addEventListener('click', function(){
            if(confirm("Are you sure to remove this item?"))
            {
                newRow.remove();
            }     
        })
    }
});