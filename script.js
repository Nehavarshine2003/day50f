
 // Add the text dynamically
    const message = document.createElement("p");
    message.textContent = 'I miss you alotttttt today, and I hope "That girl" (Neha) made you smile today (˘³˘) 💕.';
    message.style.fontSize = '1.5rem';
    message.style.color = '#333';
    message.style.marginTop = '20px';
    message.style.textAlign = 'center';
    document.body.appendChild(message);

    // Remove the loading class
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
