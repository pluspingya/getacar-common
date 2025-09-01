import LanguageCode from '../../domain/types/LanguageCode';

type LocationLocalizationDTO = {
  name: {
    [languageCode in LanguageCode]?: string
  }
  province: {
    [languageCode in LanguageCode]?: string
  }
}

export default LocationLocalizationDTO;