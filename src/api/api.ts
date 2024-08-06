import { availableOptionsQuery } from '../pages/visitorRegistration/VisitorRegistrationForm';
import { VisitorRegistrationType } from '../types/visitor-registration';

export async function submitVisitorRegistration(
  FormData: VisitorRegistrationType
) {
  try {
    const response = await fetch(
      `${import.meta.env.API_URL}/scheduling/create`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(FormData),
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getTicket(publicTicketId: string) {
  try {
    const response = await fetch(
      // `${import.meta.env.API_URL}/ticket/${publicTicketId}`,
      `http://localhost:8080/api/ticket/${publicTicketId}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Ticket data não encontrado');
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getAvailableOptions(): Promise<availableOptionsQuery[]> {
  try {
    const response = await fetch(
      // `${import.meta.env.API_URL}/ticket/${publicTicketId}`,
      `http://localhost:8080/api/ticket/available-options`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data ? data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
