import { InputGroup, Input, Button } from 'rsuite';
import { LoadingStatus } from '../../types/loadingStatus';

interface Props {
  handleFormSubmit: (e: React.FormEvent) => void;
  searchTerm: LoadingStatus;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  status: string;
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
      <div>
        <InputGroup>
          <Input
            placeholder="Search for hero..."
            onChange={setSearchTerm}
            value={searchTerm}
          />
        </InputGroup>
        <Button
          type="submit"
          appearance="primary"
          disabled={isButtonDisabled}
          loading={isButtonLoading}
        >
          Search
        </Button>
      </div>
    </form>
  );
}
