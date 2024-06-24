  <form #noteForm="ngForm" (ngSubmit)="onSubmit(noteForm)">
                            <input type="hidden" name="_id" #_id="ngModel" [(ngModel)]="noteService.selectedNote._id">

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" name="title" #title="ngModel" [(ngModel)]="noteService.selectedNote.title" placeholder="Enter the title of the note" required>
                                    <label>Title :
                                      <label class="red-text">*</label>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" name="content" #content="ngModel" [(ngModel)]="noteService.selectedNote.content" placeholder="Enter the content of the note" required>
                                    <label>Content :
                                    <label class="red-text">*</label>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" name="time" #time="ngModel" [(ngModel)]="noteService.selectedNote.time" placeholder="Enter the time of the note" required>
                                    <label>Time :</label>
                                </div>
                            </div>
                        </form>
