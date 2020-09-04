<template>
    <div class="jumbotron">
    <v-container fill-height text-center>
    <v-row align="center" justify="center">
    <v-col>
         <h3 class="display-2">OpenSync lets you watch youtube videos with your friends.</h3>
    <h4 class="subtitle-1">Create rooms and share the link with others. 
    The videos will synced with each other so that you're all in the same place</h4>
    <br/>
    <v-form center>
    <v-container fluid>
    <v-layout row>
    <v-flex xs8>
      <v-text-field
            label="Create a Room"
            solo
          >
    </v-text-field>
    </v-flex>
    <v-flex xs2>
     <v-btn color="error" large>Create Room</v-btn>
    </v-flex>
    </v-layout> 
    </v-container>
    </v-form>

    </v-col>
    </v-row>
    </v-container>
    </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {}
  };
</script>

<style >
.jumbotron{
  width: 100%;
  height: 500px;
  background: linear-gradient(-45deg, #98cbf4, #3399ff, #23a6d5, #2bbfbf);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}
.jumbotron h3, h4{
    color: #fff;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
