import { InputGroup, Input, Button } from 'rsuite';
import { LoadingStatus } from '../../types/loadingStatus';

import styles from './Form.module.css';

interface Props {
  handleFormSubmit: (e: React.FormEvent) => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  status: LoadingStatus;
}

export default function Form({
  handleFormSubmit,
  searchTerm,
  setSearchTerm,
  status,
}: Props) {
  const isButtonDisabled = !searchTerm;
  const isButtonLoading = status === 'loading';

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.wrapper}>
        <InputGroup>
          <Input
            placeholder="Search for hero..."
            onChange={setSearchTerm}
            value={searchTerm}
            label="Search for hero"
          />
        </InputGroup>
        <div>
          <Button
            type="submit"
            appearance="primary"
            disabled={isButtonDisabled}
            loading={isButtonLoading}
          >
            Search
          </Button>
        </div>
      </div>
    </form>
  );
}
