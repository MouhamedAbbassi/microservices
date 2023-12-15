package com.example.resource.Service;

 import com.example.resource.Entities.Resource;
 import com.example.resource.Repositories.ResourceRepository;
 import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ResourceServiceImpl implements ResourceService {

    private final ResourceRepository resourceRepository;

    @Override
    public Resource addResource(Resource resource) {
        return resourceRepository.save(resource);
    }

    @Override
    public Resource updateBloc(long id, Resource resource) {

        Resource resource1 = resourceRepository.findById(id).orElse(null);

        resource1.setNom(resource.getNom());
        resource1.setDescription(resource.getDescription());


        return resourceRepository.save(resource);
    }

    @Override
    public List<Resource> findAllResource() {
        return resourceRepository.findAll();
    }

    @Override
    public Resource findResourceById(Long id) {
        return resourceRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteResource(long id) {
        Resource resource=resourceRepository.findById(id).get();
    resourceRepository.delete(resource);
    }
}
