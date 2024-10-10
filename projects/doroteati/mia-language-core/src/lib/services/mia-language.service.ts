import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MiaLanguage } from '../entities/mia-language';
import { MIA_CORE_PROVIDER, MiaBaseCrudHttpService, MiaCoreConfig } from '@doroteati/mia-core';

@Injectable({
  providedIn: 'root'
})
export class MiaLanguageService extends MiaBaseCrudHttpService<MiaLanguage> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(config, http);
    this.basePathUrl = config.baseUrl + 'mia-language';
  }
}