package com.example.resource.Controllers;

 import com.example.resource.Entities.Resource;
 import com.example.resource.Service.ResourceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/resources")
@RequiredArgsConstructor
@RestController
public class ResourceController {

    private  final ResourceService resourceService ;



    @GetMapping("/")
    public ResponseEntity<List<Resource>> getAll() {
        List<Resource> resource = resourceService.findAllResource();
        return new ResponseEntity<>(resource, HttpStatus.OK);
    }

    @PostMapping("/")
    public Resource add(@RequestBody Resource resource) {

        return resourceService.addResource(resource);
    }

    @PutMapping("/{id}")
    public Resource update(@PathVariable long id,@RequestBody Resource resource) {
        return resourceService.updateBloc(id,resource);
    }
    @GetMapping("/{id}")
    public Resource getId(@PathVariable long id) {
        return resourceService.findResourceById(id);
    }

    @DeleteMapping("/{idBloc}")
    public ResponseEntity<String> delete(@PathVariable long id) {
        try {
            Resource bloc = resourceService.findResourceById(id);
            if (bloc != null) {
                resourceService.deleteResourceById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            // Handle other exceptions with a 500 Internal Server Error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
