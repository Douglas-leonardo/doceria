import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  imports: [
    BrowserModule,
    ReactiveFormsModule // Adicione esta linha
  ],
  selector: 'app-doceria',
  templateUrl: './doceria.component.html',
  styleUrls: ['./doceria.component.css']
})
export class DoceriaComponent implements OnInit {
  sidebarActive = false;
  currentYear = new Date().getFullYear();
  contactForm: FormGroup;
  isMobile = false;

  sweets = [
    {
      category: 'Doces Finos',
      description: 'Nossa seleção premium de doces finos para ocasiões especiais',
      items: [
        {
          image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Caixa de Bombons Especiais'
        },
        {
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Trufas de Chocolate Belga'
        },
        {
          image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Brigadeiros Gourmet'
        }
      ]
    },
    {
      category: 'Bolos Artesanais',
      description: 'Bolos personalizados feitos com ingredientes de alta qualidade',
      items: [
        {
          image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Bolo de Chocolate Triplo'
        },
        {
          image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Bolo de Red Velvet'
        },
        {
          image: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Bolo de Frutas Vermelhas'
        }
      ]
    },
    {
      category: 'Sobremesas Especiais',
      description: 'Deliciosas sobremesas para finalizar suas refeições',
      items: [
        {
          image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Cheesecake de Morango'
        },
        {
          image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Mousse de Chocolate'
        },
        {
          image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Tiramisu Clássico'
        },
        {
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
          name: 'Petit Gateau'
        }
      ]
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.setupAnimations();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.sidebarActive = true;
    }
  }

  toggleSidebar(): void {
    if (this.isMobile) {
      this.sidebarActive = !this.sidebarActive;
    }
  }

  scrollTo(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (this.isMobile) {
      this.sidebarActive = false;
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulário enviado:', this.contactForm.value);
      alert('Mensagem enviada com sucesso!');
      this.contactForm.reset();
    }
  }

  private setupAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(element => {
      observer.observe(element);
    });
  }
}
