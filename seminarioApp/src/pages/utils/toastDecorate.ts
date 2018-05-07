export function toastDecorate(Ctrl){
    [     
      'good',
      'error'
    ].forEach(element => {
        Ctrl.prototype [element] = function(message){
            let toast = this.create ({
                message,
                duration:3000,
                position:"bottom"
            })
            return toast.present(toast)
        } 
    });
}