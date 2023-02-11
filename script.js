

const container = document.querySelector('#rectangle');
            const buttonadd = document.getElementById('add');
            const buttonremove = document.getElementById('remove');
            const buttonchange = document.getElementById('change');
            buttonadd.addEventListener('click', () => {
                let newDiv = document.createElement('div');
                container.appendChild(newDiv);
            })
            buttonremove.addEventListener('click', () => {
                container.removeChild(container.lastElementChild)
            })
            buttonchange.addEventListener('click', () => {
                container.style.backgroundColor = 'blue'
                

            })
