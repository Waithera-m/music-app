import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: '', 
    component: SearchComponent,
    data: {
      title: 'Search'
    }
  },
  {
    path: 'artists',
    component: ArtistComponent,
    data: {
      title: 'View Artists'
    }
  },
  {
    path: 'albums',
    component: AlbumComponent,
    data: {
      title: 'View Albums'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
