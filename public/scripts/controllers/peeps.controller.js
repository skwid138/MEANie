myApp.controller('WhereMyPeeps', function (PeepsService) {
    var vm = this;
    vm.allPeeps = [];
    vm.newPeep = function () {
        console.log('in newPeep');
        var peepToAdd = {
            name : vm.nameIn,
            location : vm.locationIn
        }; //end peepToAdd
        PeepsService.add(peepToAdd);
    }; //end whereMyPeepsAt
    vm.whereMyPeepsAt = function () {
        console.log('in whereMyPeepsAt');
        PeepsService.get();
        console.log('vm.allPeeps', vm.allPeeps);
        vm.makeList();
    }; //end whereMyPeepsAt

    vm.makeList = function( ) {
        vm.allPeeps = PeepsService.servicePeeps.list;
        console.log('vm.allPeeps', vm.allPeeps);
    }; // end makeList

}); // end controller