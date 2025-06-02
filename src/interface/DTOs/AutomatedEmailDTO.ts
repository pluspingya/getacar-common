import AutomatedEmailType from '../../domain/enums/AutomatedEmailType';
import EmailTemplateDTO from './EmailTemplateDTO';

type AutomatedEmailDTO = {
  id: string;
  type: AutomatedEmailType;
  emailTemplate: EmailTemplateDTO;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
};

export default AutomatedEmailDTO;