# Teleport

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Usage
```angular2html
<mat-toolbar color="primary">
  <core-teleport name="left"></core-teleport>
  <div class="mat-spacer"></div>
  <core-teleport name="right"></core-teleport>
</mat-toolbar>
<mat-card>
  <mat-card-header>
    <mat-card-title>Teleport stepper buttons</mat-card-title>
    <mat-card-subtitle>Placed them on toolbar</mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    <mat-horizontal-stepper #stepper labelPosition="bottom">
      <mat-step label="Step 1" state="phone">
        <p>Content in step 1</p>
        <div *coreTeleport="'left' activate: stepper.selectedIndex === 0">
          <button mat-raised-button matStepperNext>To 2</button>
        </div>
      </mat-step>
      <mat-step label="Step 2" state="chat">
        <p>Content in step 2</p>
        <ng-template coreTeleport="left" [activate]="stepper.selectedIndex === 1">
          <button mat-raised-button matStepperPrevious>Back 1</button>
        </ng-template>
        <ng-template coreTeleport="right" [activate]="stepper.selectedIndex === 1">
          <button mat-raised-button matStepperNext>To 3</button>
        </ng-template>
      </mat-step>
      <mat-step label="Step 3">
        <p>Content in step 3</p>
        <ng-template coreTeleport="left" [activate]="stepper.selectedIndex === 2">
          <button mat-raised-button matStepperPrevious>Back 2</button>
        </ng-template>
        <ng-template coreTeleport="right" [activate]="stepper.selectedIndex === 2">
          <button mat-raised-button matStepperNext>Done</button>
        </ng-template>
      </mat-step>

      <!-- Icon overrides. -->
      <ng-template let-index="index" matStepperIcon="number">
        <mat-icon>{{index === 0 ? 'perm_contact_calendar' : 'date_range'}}</mat-icon>
      </ng-template>
      <ng-template let-index="index" matStepperIcon="edit">
        <mat-icon>{{index === 0 ? 'perm_contact_calendar' : 'date_range'}}</mat-icon>
      </ng-template>
    </mat-horizontal-stepper>
  </mat-card-content>
</mat-card>

```
