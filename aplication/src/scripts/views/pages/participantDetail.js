import UrlParser from '../../routes/urlParser';
import GetData from '../../utils/getDataApi';
import GetDataRegistration from '../../utils/getDataRegistration';
import { participantName, participantId, ticketType, registration, merchandise, buttonElement, checkStatusElement, historySession, statusActive, statusInactive } from '../templates/participantDetail/participantTemplates';


const participantDetail = {
  async render() {
    return `
      <div class="spinner">
        <div class="progress-7"></div>
      </div>
      <section class="w-full mx-auto bg-bottom">

      <!-- Navigation -->
        <div class="flex items-center justify-between">
          <a href="/#/active-session" class="pl-5">
              <span class="iconify text-5xl" data-icon="bi:arrow-left-short"></span>
          </a>
          <h1 class="mx-auto text-2xl"><b>Participant Detail</b></h1>
          <div></div>
        </div>
      <!-- Navigation -->

        <div class="box-border w-full bg-white mx-auto rounded-lg mt-10 mb-10 pb-5 md:px-7 px-4">
          <div class="flex items-center justify-between border-b-2 border-dashed">
            <div class="w-full">
            <div class="flex items-center justify-between w-full">
                <div id="custumer">
                </div>
              </div>
            </div>

            <!--NOTIFY CHECKED-->
            <div id="status">

            </div>
          </div>


          <!--GRID-->
            <div class="grid grid-cols-2 ">
                <!--LEFT-->
                <div>
                <!--ID-->
                  <div>
                    <div id="participant">
                    </div>
                  </div>

                  <div>
                    <div id="ticket">
                    </div>
                  </div>

                  <div id="registration">

                  </div>

                  <div>
                    <p class="text-gray-400 pt-4 font-medium text-xs">REGISTRATION TIME</p>

                    <p class="regis-time text-xs mt-1 font-medium"></p>
                  </div>


                  <div id="session"></div>

                </div>

                <!-- RIGHT -->
                <div>
                  <!--CHECK-IN-->

                  <div>
                    <p class="text-gray-400 pt-4 font-medium text-xs">CHECK-IN TIME</p>

                    <p class="checkin text-xs mt-1 font-medium"></p>
                  </div>
                </div>
            </div>
          <!--GRID CLOSE-->

          <!--MERCHANDISE-->
          <form>
              <p class="text-gray-400 py-4 font-medium text-xs">MERCHANDISE</p>

              <div id="merch">

              </div>

              <div id="session-history">
              <p class="text-gray-400 pt-4 font-medium text-xs">HISTORY</p>
              </div>

              <!--BUTTON SUBMIT-->

              <div id="button-submit">

              </div>
          </form>
          <!--MERCHANDISE CLOSE-->
        </div>
      </section>
    `;
  },
  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const elementName = document.querySelector('#custumer');
    const elementId = document.querySelector('#participant');
    const elementDesc = document.querySelector('#ticket');
    const validatedOn = document.querySelector('#registration');
    const elementTicketType = document.querySelector('#ticket');
    const merchElement = document.querySelector('#merch');
    const buttonSubmit = document.querySelector('#button-submit');
    const spinnerElement = document.querySelector('.spinner');
    const checkStatus = document.querySelector('#check-status');
    const statusCheckIn = document.querySelector('#status');
    const regisTime = document.querySelector('.regis-time');
    const checkTime = document.querySelector('.checkin');
    const HistoryElement = document.querySelector('#session-history');

    const idParticipant = 3;
    //const idParticipant = id.split('-')[0];
    const idSession = 5;
    //const idSession = id.split('-')[1];
    //console.log(idSession);

    Promise.all([
      GetData(`http://localhost:8001/items/order?fields=customer_id.customer_id,customer_id.customer_name,ticket_id.ticket_id,ticket_id.ticket_type&filter[customer_id]=${idParticipant}`),
      GetDataRegistration(`http://localhost:5000/v1/participant/${idParticipant}/seminar/${idSession}`),
      // GetDataRegistration(`http://localhost:5000/v1/participant/${idParticipant}/seminar/5`),
      GetDataRegistration(`http://localhost:5000/v1/merch/${idParticipant}`),
      GetDataRegistration(`http://localhost:5000/v1/participant/${idParticipant}`)

    ]).then(async([res1, res2, res3, res4]) => {
      spinnerElement.classList.add('hidden')
      buttonSubmit.innerHTML = buttonElement;
      res1.map((data) => {

        elementName.innerHTML = participantName(data);
        elementId.innerHTML = participantId(data);
        // elementDesc.innerHTML = description(data);
      })

      // Check Status
      const { validate_on, ticket_type, create_at } = res2.participant

      if (validate_on !== '' || null) {
        statusCheckIn.innerHTML += statusActive
      } else {
        statusCheckIn.innerHTML += statusInactive
      }

      //SWEETALERT2 NOTIFY
      const btn = document.getElementById('button-submit');
        btn.addEventListener('click', function () {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        })

      // ticketType
      elementTicketType.innerHTML = ticketType(ticket_type);

      // Registration time

      regisTime.innerHTML = `${moment(create_at).locale('id').format('LL')}`
      checkTime.innerHTML = `${moment(validate_on).locale('id').format('LLLL')}`

      // Merch ------->

      const merch = res2.merch
      merch.map(data => {
        // Merch list logic
        merchElement.innerHTML += merchandise(data)
      })

      const listMerchApi = res3.merchandise

      if (listMerchApi.length !== 0 || null){

        listMerchApi.map(data => {
          document.getElementById(data).checked = true;
          document.getElementById(data).disable = false;
        })
      }

      // SESSION HISTORY
      // res4.map(data => {
      //   console.log(data);
      //   if(data.validate_on !== '' || null){
      //     HistoryElement.innerHTML += historySession(data)
      //   }else{
      //     HistoryElement.innerHTML = "<p>-</p>"
      //   }
      // })
     

      

      
    }).catch((err) => {
      console.log(err)
    });

    // Submit Check in & update merchandise
    buttonSubmit.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Form list merch checkbox
      const itemForm = document.getElementById('merch');
      const checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]');

      const merchandise = new Array()

      checkBoxes.forEach(data => {
        if (data.checked) {
          merchandise.push(data.value)
        }
      })

      const checkIn =  await fetch(`http://localhost:5000/v1/participant/${idParticipant}/seminar/${idSession}`, {
        method: 'PATCH'
      })

      const updateMerch =  await fetch(`http://localhost:5000/v1/merch/${idParticipant}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(merchandise)
      })

      if (checkIn.status === 200 && updateMerch.status === 200) {

        window.location.replace('/#/active-session')
      } else {
        console.log('Wkwkwkwwk')
      }


    })
  }
};

export default participantDetail;
