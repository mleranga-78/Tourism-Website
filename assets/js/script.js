document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Navbar scroll effect
    const nav = document.getElementById('navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-white', 'shadow-md');
                nav.classList.remove('bg-transparent', 'text-white');
                nav.classList.add('text-slate-900');
            } else {
                nav.classList.remove('bg-white', 'shadow-md', 'text-slate-900');
                nav.classList.add('bg-transparent', 'text-white');
            }
        });
    }

    // Basic Form Validation for Registration
    const regForm = document.getElementById('registrationForm');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Show simple success message
            const btn = regForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Registration Successful!';
            btn.classList.replace('bg-sky-600', 'bg-green-500');
            btn.classList.replace('hover:bg-sky-700', 'hover:bg-green-600');
            
            setTimeout(() => {
                regForm.reset();
                btn.innerHTML = originalText;
                btn.classList.replace('bg-green-500', 'bg-sky-600');
                btn.classList.replace('hover:bg-green-600', 'hover:bg-sky-700');
            }, 3000);
        });
    }
});
