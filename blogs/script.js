document.addEventListener('DOMContentLoaded', () => {
    // Find all <pre> tags on the page
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach((block) => {
        // Create the copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerHTML = '<i class="far fa-copy"></i> Copy';

        // Append the button to the <pre> block
        block.appendChild(copyButton);

        // Add the click event listener
        copyButton.addEventListener('click', async () => {
            // Find the <code> element inside this specific <pre> block
            const code = block.querySelector('code');
            const textToCopy = code.innerText;

            try {
                // Write the code to the clipboard
                await navigator.clipboard.writeText(textToCopy);
                
                // Visual feedback for success
                copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyButton.classList.add('copied');

                // Revert the button back to normal after 2 seconds
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="far fa-copy"></i> Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy code: ', err);
                copyButton.innerHTML = '<i class="fas fa-times"></i> Error';
            }
        });
    });
});

function openMail() {
    console.log("Buttons are:",buttons);
    window.location.href="mailto:ishaanksheth2@gmail.com"
};
const buttons = document.getElementsByClassName("btn-follow");
document.addEventListener("DOMContentLoaded", function() {
  
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", openMail);
    }
});