import { Inject, Injectable } from '@angular/core';
import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MiaLanguage } from '../entities/mia-language';

@Injectable({
  providedIn: 'root'
})
export class MiaLanguageService extends MiaBaseCrudHttpService<MiaLanguage> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia-language';
  }
}