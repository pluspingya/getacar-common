import { LanguageCode } from '../../domain';
import AutomatedEmailType from '../../domain/enums/AutomatedEmailType';
import EmailTemplateDTO from './EmailTemplateDTO';

type AutomatedEmailDTO = {
  id: string;
  type: AutomatedEmailType;
  languageCode: LanguageCode;
  enabled: boolean;
  emailTemplateId: string;
  emailTemplateName: string;
  emailTemplate: EmailTemplateDTO | undefined;
  createdAt: string;
  updatedAt: string;
};

export default AutomatedEmailDTO;