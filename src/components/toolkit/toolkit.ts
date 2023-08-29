import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, DestroyRef, Inject, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'toolkit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form>
      <fieldset [formGroup]="form">
        <label><input type="radio" formControlName="theme" value="auto">System Default</label>
        <label><input type="radio" formControlName="theme" value="light">Light</label>
        <label><input type="radio" formControlName="theme" value="dark">Dark</label>
      </fieldset>
    </form>
  `,
  styles: [
    `
    fieldset {
      border:0;
      padding:0;
      padding:0.5rem;
      display:grid;
      grid-auto-flow:column;
      justify-content:center;
      gap:0.5rem;
    }

    label {
      display:grid;
      grid-auto-flow:column;
      gap:0.25rem;
    }
  `,
  ],
})
export class ToolkitComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private document: Document = inject(DOCUMENT);

  form: FormGroup = this.fb.group({
    theme: 'auto',
  });
  vc$: Observable<any> = this.form.valueChanges;

  ngOnInit(): void {
    this.vc$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (e: any) => {
        this.document.firstElementChild?.setAttribute('color-scheme', e.theme);
      },
    });
  }
}
