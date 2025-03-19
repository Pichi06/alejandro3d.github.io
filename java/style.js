document.addEventListener("DOMContentLoaded", () => {
    // Variables del carrito
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.querySelector(".carrito-lista");
    const checkoutButton = document.querySelector(".checkout");

    // Variables del sistema de usuario
    let usuarioActual = localStorage.getItem("usuario") || null;

    // Función para actualizar el carrito
    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price} 
                <button class="remove-item" data-index="${index}">❌</button>`;
            cartList.appendChild(li);
        });

        if (cart.length === 0) {
            cartList.innerHTML = "<p>El carrito está vacío 🛒</p>";
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // Agregar evento para eliminar productos
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                cart.splice(index, 1);
                updateCart();
                showNotification("Producto eliminado ❌", "error");
            });
        });
    }

    // Evento para agregar productos al carrito
    document.querySelectorAll(".agregar-carrito").forEach((button) => {
        button.addEventListener("click", (e) => {
            const product = e.target.parentElement;
            const productName = product.querySelector("h3").innerText;
            const productPrice = Math.floor(Math.random() * 50) + 10; // Precio aleatorio

            cart.push({ name: productName, price: productPrice });
            updateCart();
            showNotification(`${productName} añadido al carrito 🛒`, "success");
        });
    });

    // Finalizar compra
    checkoutButton.addEventListener("click", () => {
        if (cart.length > 0) {
            alert("🎉 ¡Gracias por tu compra! 🛍️");
            cart = [];
            updateCart();
        } else {
            alert("Tu carrito está vacío ❌");
        }
    });

    // Función para mostrar notificaciones
    function showNotification(message, type) {
        const notification = document.createElement("div");
        notification.classList.add("notification", type);
        notification.innerText = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    // Buscador de productos
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("keyup", (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll(".producto").forEach(producto => {
            const title = producto.querySelector("h3").innerText.toLowerCase();
            producto.style.display = title.includes(term) ? "block" : "none";
        });
    });

    // Animaciones de hover en productos
    document.querySelectorAll(".producto").forEach(producto => {
        producto.addEventListener("mouseenter", () => {
            producto.style.transform = "scale(1.05)";
            producto.style.transition = "0.3s";
        });
        producto.addEventListener("mouseleave", () => {
            producto.style.transform = "scale(1)";
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        let usuarioActual = localStorage.getItem("usuario") || null;
    
        const registroForm = document.getElementById("registro-form");
        const loginForm = document.getElementById("login-form");
        const logoutBtn = document.getElementById("logout-btn");
    
        if (usuarioActual) {
            showNotification(`👋 Bienvenido, ${usuarioActual}!`, "success");
            logoutBtn.style.display = "block";
        }
    

    
        // Función de notificación
        function showNotification(message, type) {
            const notification = document.createElement("div");
            notification.classList.add("notification", type);
            notification.innerText = message;
            document.body.appendChild(notification);
    
            setTimeout(() => {
                notification.remove();
            }, 2000);
        }
    });
    

    // Actualizar carrito al cargar la página
    updateCart();
});
document.addEventListener("DOMContentLoaded", () => {
    const thingiverseSection = document.querySelector(".thingiverse");
    thingiverseSection.style.opacity = "1";
    thingiverseSection.style.transform = "translateY(0)";

    const btnThingiverse = document.querySelector(".btn-thingiverse");
    btnThingiverse.addEventListener("mouseenter", () => {
        btnThingiverse.style.transform = "scale(1.1)";
        btnThingiverse.style.transition = "0.3s";
    });

    btnThingiverse.addEventListener("mouseleave", () => {
        btnThingiverse.style.transform = "scale(1)";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Cambio de fondo en scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Menú desplegable en móviles
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que la página se recargue

        const serviceID = "service_25qvob4"; // Reemplaza con tu Service ID
        const templateID = "template_jatz9ir"; // Reemplaza con tu Template ID

        const params = {
            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            mensaje: document.getElementById("mensaje").value,
            procucto: document.getElementById("procucto").value,
            colores: document.getElementById("colores").value
            
        };

        emailjs.send(serviceID, templateID, params)
            .then(response => {
                alert("📩 ¡Mensaje enviado con éxito!");
                document.querySelector("form").reset();
            })
            .catch(error => {
                console.error("❌ Error al enviar el correo:", error);
                alert("⚠️ Hubo un problema al enviar el mensaje.");
            });
    });
});
const params = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    mensaje: document.getElementById("mensaje").value,
    procucto: document.getElementById("procucto").value,
    colores: document.getElementById("colores").value
};

