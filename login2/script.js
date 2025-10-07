
  // Codes and usernames
  const codes = {
    
  "gs_initA_Cnit10" : "Nit", 
  "gs_initA_lsd84" : "Jimmy",
  "gs_initA_minhuzz92" : "Minhaj",
  "gs_initA_mahdihh16" : "Mahdi",
  "gs_initPA_tasin44" : "Tasin",
  "gs_initA_printer67" : "Pranto",
  "gs_initA_araf54" : "Araf",
  "gs_initA_VCbota99" : "Ahnaf",
  "gs_initA_said85" : "Said",
  "gs_initA_fatin23" : "Fatin",
  "gs_initA_vodka12" : "Abid",


    
  };

  function checkCode() {
    let input = document.getElementById("inputField").value.trim();
    let message = document.getElementById("message");

    if (codes[input]) {
      const username = codes[input];
      message.style.color = "lime";
      message.innerHTML = "Access Granted!";

      // Redirect to main.html with username in URL
      alert(`You are logged in as ${username}`);
        // Pass the username to the next page via URL
        window.location.href = "fain.html?user=" + encodeURIComponent(username);
    } else {
      message.style.color = "red";
      message.innerHTML = "Invalid Code";
    }
  }
