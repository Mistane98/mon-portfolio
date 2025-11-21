import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Resume } from './features/resume/resume';
import { Projects } from './features/projects/projects';
import { Github } from './features/github/github';
import { ContactComponent } from './features/contact/contact';
import { NotFound } from './shared/not-found/not-found';


 export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'skills', component: Skills },
    { path: 'resume', component: Resume },
    { path: 'projects', component: Projects },
    { path: 'github', component: Github },
    
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
