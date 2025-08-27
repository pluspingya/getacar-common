import { IncidentStatus, IncidentType } from '../../domain';

type IncidentDTO = {
  id: string;
  ref: string;
  type: IncidentType;
  entityId: string;
  entityType: string;
  accountId: string;
  shopId: string;
  detail: string;
  status: IncidentStatus;
  finalizerUserId: string | null;
  finalizerUserName: string | null;
  finalizedNote: string | null;
  finalizedAt: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export default IncidentDTO;