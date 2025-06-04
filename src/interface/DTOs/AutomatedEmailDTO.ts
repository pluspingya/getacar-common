import AutomatedEmailType from '../../domain/enums/AutomatedEmailType';
import EmailTemplateDTO from './EmailTemplateDTO';

type AutomatedEmailDTO = {
  id: string;
  type: AutomatedEmailType;
  enabled: boolean;
  emailTemplateId: string;
  emailTemplateName: string;
  emailTemplate: EmailTemplateDTO | undefined;
  createdAt: string;
  updatedAt: string;
};

export default AutomatedEmailDTO;