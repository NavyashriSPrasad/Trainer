// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//     Card,
//     CardContent,
//     Button,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     TextField,
//   } from '@mui/material';
  
// const TrainerDashboard = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [currentTrainer, setCurrentTrainer] = useState(null);

//   useEffect(() => {
//     fetchTrainers();
//   }, []);

//   const fetchTrainers = async () => {
//     try {
//       const response = await axios.get("/api/trainers");
//       setTrainers(response.data);
//     } catch (error) {
//       console.error("Error fetching trainers:", error);
//     }
//   };

//   const handleAddOrEditTrainer = async (trainer) => {
//     try {
//       if (trainer.id) {
//         await axios.put(`/api/trainers/${trainer.id}`, trainer);
//       } else {
//         await axios.post("/api/trainers", trainer);
//       }
//       fetchTrainers();
//       setOpenDialog(false);
//     } catch (error) {
//       console.error("Error saving trainer:", error);
//     }
//   };

//   const handleDeleteTrainer = async (id) => {
//     try {
//       await axios.delete(`/api/trainers/${id}`);
//       fetchTrainers();
//     } catch (error) {
//       console.error("Error deleting trainer:", error);
//     }
//   };

//   const openEditDialog = (trainer) => {
//     setCurrentTrainer(trainer);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setCurrentTrainer(null);
//     setOpenDialog(false);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Trainer Dashboard</h1>
//       <Button className="mb-4" onClick={() => openEditDialog(null)}>
//         Add Trainer
//       </Button>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {trainers.map((trainer) => (
//           <Card key={trainer.id} className="p-4">
//             <CardContent>
//               <h2 className="text-xl font-semibold">{trainer.name}</h2>
//               <p>Expertise: {trainer.expertise}</p>
//               <p>Availability: {trainer.availability}</p>
//               <p>Contact: {trainer.contactInfo}</p>
//               <div className="flex justify-between mt-4">
//                 <Button size="sm" onClick={() => openEditDialog(trainer)}>
//                   Edit
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="destructive"
//                   onClick={() => handleDeleteTrainer(trainer.id)}
//                 >
//                   Remove
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//       {openDialog && (
//         <Dialog open={openDialog} onOpenChange={handleCloseDialog}>
//           <DialogTitle>{currentTrainer ? "Edit Trainer" : "Add Trainer"}</DialogTitle>
//           <DialogContent>
//             <TextField
//               label="Name"
//               defaultValue={currentTrainer?.name || ""}
//               onChange={(e) =>
//                 setCurrentTrainer({
//                   ...currentTrainer,
//                   name: e.target.value,
//                 })
//               }
//               className="mb-4"
//             />
//             <TextField
//               label="Expertise"
//               defaultValue={currentTrainer?.expertise || ""}
//               onChange={(e) =>
//                 setCurrentTrainer({
//                   ...currentTrainer,
//                   expertise: e.target.value,
//                 })
//               }
//               className="mb-4"
//             />
//             <TextField
//               label="Availability"
//               defaultValue={currentTrainer?.availability || ""}
//               onChange={(e) =>
//                 setCurrentTrainer({
//                   ...currentTrainer,
//                   availability: e.target.value,
//                 })
//               }
//               className="mb-4"
//             />
//             <TextField
//               label="Contact Info"
//               defaultValue={currentTrainer?.contactInfo || ""}
//               onChange={(e) =>
//                 setCurrentTrainer({
//                   ...currentTrainer,
//                   contactInfo: e.target.value,
//                 })
//               }
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog}>Cancel</Button>
//             <Button
//               onClick={() =>
//                 handleAddOrEditTrainer({
//                   ...currentTrainer,
//                 })
//               }
//             >
//               Save
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default TrainerDashboard;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardContent,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from "@mui/material";

// const TrainerDashboard = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [currentTrainer, setCurrentTrainer] = useState(null);

//   useEffect(() => {
//     fetchTrainers();
//   }, []);

//   const fetchTrainers = async () => {
//     try {
//       const response = await axios.get("/api/trainers");
//       setTrainers(response.data); // Set the trainers to state
//     } catch (error) {
//       console.error("Error fetching trainers:", error);
//     }
//   };

//   const handleAddTrainer = async (trainer) => {
//     try {
//       await axios.post("/api/trainers", trainer);
//       fetchTrainers(); // Refresh the trainer list
//       setOpenDialog(false); // Close the dialog
//     } catch (error) {
//       console.error("Error adding trainer:", error);
//     }
//   };

//   const handleEditTrainer = async (trainer) => {
//     try {
//       await axios.put(`/api/trainers/${trainer.id}`, trainer); // Update existing trainer
//       fetchTrainers(); // Refresh the trainer list
//       setOpenDialog(false); // Close the dialog
//     } catch (error) {
//       console.error("Error updating trainer:", error);
//     }
//   };

//   const handleDeleteTrainer = async (id) => {
//     try {
//       await axios.delete(`/api/trainers/${id}`); // Call the delete API
//       fetchTrainers(); // Refresh the trainer list
//     } catch (error) {
//       console.error("Error deleting trainer:", error);
//     }
//   };

//   const openAddDialog = () => {
//     setCurrentTrainer(null); // For adding new trainer
//     setOpenDialog(true); // Open the dialog
//   };

//   const openEditDialog = (trainer) => {
//     setCurrentTrainer(trainer); // Pass the trainer data to edit
//     setOpenDialog(true); // Open the dialog
//   };

//   const handleCloseDialog = () => {
//     setCurrentTrainer(null);
//     setOpenDialog(false);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Trainer Dashboard</h1>
//       {/* Separate buttons for Add, Edit, Remove */}
//       <div className="mb-4">
//         <Button color="primary" onClick={openAddDialog}>
//           Add Trainer
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {trainers.map((trainer) => (
//           <Card key={trainer.id} className="p-4">
//             <CardContent>
//               <h2 className="text-xl font-semibold">{trainer.name}</h2>
//               <p>Expertise: {trainer.expertise}</p>
//               <p>Availability: {trainer.availability}</p>
//               <p>Contact: {trainer.contactInfo}</p>
//               <div className="flex justify-between mt-4">
//                 {/* Edit Button */}
//                 <Button size="sm" onClick={() => openEditDialog(trainer)}>
//                   Edit
//                 </Button>
//                 {/* Delete Button */}
//                 <Button
//                   size="sm"
//                   variant="outlined"
//                   color="error"
//                   onClick={() => handleDeleteTrainer(trainer.id)}
//                 >
//                   Remove
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Dialog for Add/Edit Trainer */}
//       {openDialog && (
//         <Dialog open={openDialog} onClose={handleCloseDialog}>
//           <DialogTitle>{currentTrainer ? "Edit Trainer" : "Add Trainer"}</DialogTitle>
//           <DialogContent>
//             <TextField
//               label="Name"
//               defaultValue={currentTrainer?.name || ""}
//               onChange={(e) =>
//                 setCurrentTrainer({ ...currentTrainer, name: e.target.value })
//               }
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Expertise"
//               defaultValue={currentTrainer?.expertise || ""}
//               onChange={(e) =>
//                 setCurrentTrainer({ ...currentTrainer, expertise: e.target.value })
//               }
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Availability"
//               defaultValue={currentTrainer?.availability || ""}
//               onChange={(e) =>
//                 setCurrentTrainer({ ...currentTrainer, availability: e.target.value })
//               }
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Contact Info"
//               defaultValue={currentTrainer?.contactInfo || ""}
//               onChange={(e) =>
//                 setCurrentTrainer({ ...currentTrainer, contactInfo: e.target.value })
//               }
//               fullWidth
//               margin="normal"
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog}>Cancel</Button>
//             <Button
//               onClick={() =>
//                 currentTrainer ? handleEditTrainer(currentTrainer) : handleAddTrainer(currentTrainer)
//               }
//               color="primary"
//             >
//               Save
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default TrainerDashboard;
import React, { useState, useEffect } from "react";
import axios from "axios";
import './trainerDashboard.css';  // For CSS in the same folder


import {
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";

// Main Dashboard Component
const TrainerDashboard = () => {
  const [trainers, setTrainers] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentTrainer, setCurrentTrainer] = useState(null);
  const [typeFilter, setTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    fetchTrainers();
    fetchOpportunities();
    fetchTasks();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get("/api/trainers");
      setTrainers(response.data); // Set trainers
    } catch (error) {
      console.error("Error fetching trainers:", error);
    }
  };

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get("/api/opportunities");
      setOpportunities(response.data); // Set opportunities
    } catch (error) {
      console.error("Error fetching opportunities:", error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/tasks");
      setTasks(response.data); // Set tasks for operations
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleExpressInterest = async (id) => {
    try {
      await axios.post(`/api/opportunities/${id}/expressInterest`);
      fetchOpportunities(); // Refresh opportunities
    } catch (error) {
      console.error("Error expressing interest:", error);
    }
  };

  const openAddDialog = () => {
    setCurrentTrainer(null);
    setOpenDialog(true);
  };

  const openEditDialog = (trainer) => {
    setCurrentTrainer(trainer);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setCurrentTrainer(null);
    setOpenDialog(false);
  };

  const handleAddTrainer = async (trainer) => {
    try {
      await axios.post("/api/trainers", trainer);
      fetchTrainers();
      setOpenDialog(false);
    } catch (error) {
      console.error("Error adding trainer:", error);
    }
  };

  const handleEditTrainer = async (trainer) => {
    try {
      await axios.put(`/api/trainers/${trainer.id}`, trainer);
      fetchTrainers();
      setOpenDialog(false);
    } catch (error) {
      console.error("Error updating trainer:", error);
    }
  };

  const handleDeleteTrainer = async (id) => {
    try {
      await axios.delete(`/api/trainers/${id}`);
      fetchTrainers();
    } catch (error) {
      console.error("Error deleting trainer:", error);
    }
  };

  const filteredOpportunities = opportunities.filter(
    (opportunity) =>
      (typeFilter ? opportunity.type === typeFilter : true) &&
      (locationFilter ? opportunity.location === locationFilter : true)
  );

  return (
    <Container>
      <div className="trainer-dashboard">
        <Typography variant="h4" className="mb-6">
          Trainer Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Trainer Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="trainer-panel">
              <Typography variant="h5">Trainers</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={openAddDialog}
                className="mb-3"
              >
                Add Trainer
              </Button>
              <div className="trainers-list">
                {trainers.map((trainer) => (
                  <Card key={trainer.id} className="trainer-card">
                    <CardContent>
                      <Typography variant="h6">{trainer.name}</Typography>
                      <p>Expertise: {trainer.expertise}</p>
                      <p>Availability: {trainer.availability}</p>
                      <p>Contact: {trainer.contactInfo}</p>
                      <Button
                        variant="outlined"
                        onClick={() => openEditDialog(trainer)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDeleteTrainer(trainer.id)}
                      >
                        Remove
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Paper>
          </Grid>

          {/* Opportunities Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="opportunities-panel">
              <Typography variant="h5">Training Opportunities</Typography>
              <div className="filters mb-3">
                <FormControl fullWidth>
                  <InputLabel>Type</InputLabel>
                  <Select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Technical">Technical</MenuItem>
                    <MenuItem value="Soft Skills">Soft Skills</MenuItem>
                    <MenuItem value="Leadership">Leadership</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth className="mt-2">
                  <InputLabel>Location</InputLabel>
                  <Select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Online">Online</MenuItem>
                    <MenuItem value="In-Person">In-Person</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="opportunities-list">
                {filteredOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="opportunity-card">
                    <CardContent>
                      <Typography variant="h6">{opportunity.title}</Typography>
                      <p>Type: {opportunity.type}</p>
                      <p>Location: {opportunity.location}</p>
                      <p>Status: {opportunity.status}</p>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleExpressInterest(opportunity.id)}
                        disabled={opportunity.status === "Interested"}
                      >
                        Express Interest
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Paper>
          </Grid>
        </Grid>

        {/* Operations Section */}
        <Grid container spacing={3} className="mt-6">
          <Grid item xs={12}>
            <Paper elevation={3} className="operations-panel">
              <Typography variant="h5">Operations Panel</Typography>
              <div className="tasks-list">
                {tasks.map((task) => (
                  <Card key={task.id} className="task-card">
                    <CardContent>
                      <Typography variant="h6">{task.name}</Typography>
                      <p>Assigned to: {task.assignedTrainer}</p>
                      <p>Progress: {task.progress}%</p>
                      <Button variant="outlined">Update Task</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* Trainer Dialog */}
      {openDialog && (
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{currentTrainer ? "Edit Trainer" : "Add Trainer"}</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              defaultValue={currentTrainer?.name || ""}
              onChange={(e) =>
                setCurrentTrainer({ ...currentTrainer, name: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Expertise"
              defaultValue={currentTrainer?.expertise || ""}
              onChange={(e) =>
                setCurrentTrainer({ ...currentTrainer, expertise: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Availability"
              defaultValue={currentTrainer?.availability || ""}
              onChange={(e) =>
                setCurrentTrainer({ ...currentTrainer, availability: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Contact Info"
              defaultValue={currentTrainer?.contactInfo || ""}
              onChange={(e) =>
                setCurrentTrainer({ ...currentTrainer, contactInfo: e.target.value })
              }
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              onClick={() =>
                currentTrainer ? handleEditTrainer(currentTrainer) : handleAddTrainer(currentTrainer)
              }
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default TrainerDashboard;
