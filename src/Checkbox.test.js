import { fireEvent, render } from '@testing-library/react';
import Checkbox from './Checkbox';

test('checking Checkbox', () => {
    // Arrange
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/Not checked!/);

    // Action
    fireEvent.click(checkbox);

    // Assert
    expect(checkbox).toBeChecked();
});