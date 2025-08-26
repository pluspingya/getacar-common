import { IncidentStatus, IncidentType } from '../../domain';

type IncidentDTO = {
  id: string;
  type: IncidentType;
  entityId: string;
  entityType: string;
  accountId: string;
  accountName: string;
  detail: string;
  status: IncidentStatus;
  finalizerUserId: string | null;
  finalizerUserName: string | null;
  finalizedNote: string | null;
  finalizedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export default IncidentDTO;